'use strict'

let express = require('express');
let app = express();
app.use(express.urlencoded());
app.use(express.json());

const { Client } = require('pg');
const connectionString = process.env.DATABASE_URL; // database url
const client = new Client({
	connectionString: connectionString
});
client.connect();

let cors = require('cors');
const corsOptions ={
	origin: 'http://localhost:4200'
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Running on port ' + PORT);
});


Number.prototype.pad = function(size) {
    var s = String(this);
	while (s.length < (size || 2)) {
		s = "0" + s;
	}
    return s;
}

app.get('/test', cors(corsOptions), async (req, res) => {
	res.send('working');
});

app.get('/players', cors(corsOptions), async (req, res) => {
	const players_select = '\
		SELECT\
			id,\
			team_id,\
			short_name,\
			nationality,\
			age,\
			club,\
			overall,\
			player_positions,\
			pace,\
			shooting,\
			passing,\
			dribbling,\
			defending\
		FROM players_20\
		WHERE LOWER(' + req.query.searchType + ') LIKE LOWER(' + '\'%' + req.query.searchTerm + '%\')\
		AND overall <= ' + req.query.ovrUpper + ' AND overall >= ' + req.query.ovrLower + '\
		AND (pace IS NULL OR (pace <= ' + req.query.pacUpper + ' AND pace >= ' + req.query.pacLower + '))\
		AND (shooting IS NULL OR (shooting <= ' + req.query.shoUpper + ' AND shooting >= ' + req.query.shoLower + '))\
		AND (passing IS NULL OR (passing <= ' + req.query.pasUpper + ' AND passing >= ' + req.query.pasLower + '))\
		AND (dribbling IS NULL OR (dribbling <= ' + req.query.driUpper + ' AND dribbling >= ' + req.query.driLower + '))\
		AND (defending IS NULL OR (defending <= ' + req.query.defUpper + ' AND defending >= ' + req.query.defLower + '))\
		AND ' + req.query.sortCol + ' IS NOT NULL\
		ORDER BY ' + req.query.sortCol + ' ' + req.query.sortDir + ', id ASC\
		LIMIT ' + req.query.limit + ' OFFSET ' + req.query.offset + ';';

	const players = await client.query(players_select);
	res.send(players.rows);
});

app.get('/player/:id', cors(corsOptions), async (req, res) => {
	const player_select = '\
		SELECT\
			id,\
			team_id,\
			short_name,\
			long_name,\
			age,\
			dob,\
			nationality,\
			height_cm,\
			weight_kg,\
			potential,\
			value_eur,\
			wage_eur,\
			club,\
			overall,\
			player_positions,\
			preferred_foot,\
			weak_foot,\
			skill_moves,\
			international_reputation,\
			work_rate,\
			body_type,\
			release_clause_eur,\
			player_tags,\
			team_position,\
			team_jersey_number,\
			joined,\
			loaned_from,\
			contract_valid_until,\
			nation_jersey_number,\
			nation_position,\
			pace,\
			shooting,\
			passing,\
			dribbling,\
			defending,\
			player_traits,\
			attacking_crossing,attacking_finishing,attacking_heading_accuracy,attacking_short_passing,attacking_volleys,\
			mentality_aggression,mentality_interceptions,mentality_positioning,mentality_vision,mentality_penalties,mentality_composure,\
			skill_dribbling,skill_curve,skill_fk_accuracy,skill_long_passing,skill_ball_control,\
			movement_acceleration,movement_sprint_speed,movement_agility,movement_reactions,movement_balance,\
			power_shot_power,power_jumping,power_stamina,power_strength,power_long_shots,\
			defending_marking,defending_standing_tackle,defending_sliding_tackle,\
			goalkeeping_diving,goalkeeping_handling,goalkeeping_kicking,goalkeeping_positioning,goalkeeping_reflexes,\
			gk_diving,gk_handling,gk_kicking,gk_positioning,gk_reflexes,gk_speed\
			FROM players_20\
		WHERE id = ' + req.params.id;

	const player = await client.query(player_select);
	res.send(player.rows[0]);
});

app.get('/teams', cors(corsOptions), async (req, res) => {
	const teams_select = '\
		SELECT id, team_name, overall, attacking, midfield, defending, num_players\
		FROM teams_20\
		WHERE LOWER(team_name) LIKE LOWER(' + '\'%' + req.query.searchTerm + '%\')\
		AND overall <= ' + req.query.ovrUpper + ' AND overall >= ' + req.query.ovrLower + '\
		AND (attacking IS NULL OR (attacking <= ' + req.query.attUpper + ' AND attacking >= ' + req.query.attLower + '))\
		AND (midfield IS NULL OR (midfield <= ' + req.query.midUpper + ' AND midfield >= ' + req.query.midLower + '))\
		AND (defending IS NULL OR (defending <= ' + req.query.defUpper + ' AND defending >= ' + req.query.defLower + '))\
		ORDER BY ' + req.query.sortCol + ' ' + req.query.sortDir + '\
		LIMIT ' + req.query.limit + ' OFFSET ' + req.query.offset + ';';

	const teams = await client.query(teams_select);
	res.send(teams.rows);
});

app.get('/team/:id', cors(corsOptions), async (req, res) => {
	const team_query = '\
		SELECT id, team_name, overall, attacking, midfield, defending, num_players\
		FROM teams_20\
		WHERE id = \'' + req.params.id + '\'\
	';

	const team = await client.query(team_query);
	res.send(team.rows[0]);
});

app.get('/players/team', cors(corsOptions), async (req, res) => {
	const team_players_select = '\
		SELECT\
			id,\
			team_id,\
			short_name,\
			nationality,\
			age,\
			club,\
			overall,\
			player_positions,\
			pace,\
			shooting,\
			passing,\
			dribbling,\
			defending\
		FROM players_20\
		WHERE REPLACE(LOWER(club), \' \', \'\') = \'' + req.query.team_name + '\'\
		ORDER BY ' + req.query.sortCol + ' ' + req.query.sortDir + '\
		LIMIT ' + req.query.limit + ' OFFSET ' + req.query.offset;

	const team_players = await client.query(team_players_select);
	res.send(team_players.rows);
});


