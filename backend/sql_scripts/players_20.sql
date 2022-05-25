CREATE TABLE IF NOT EXISTS players_20 (
	id INT PRIMARY KEY,
	player_url TEXT,
	short_name TEXT NOT NULL,
	long_name TEXT,
	age INT,
	dob TIMESTAMP,
	height_cm INT,
	weight_kg INT,
	nationality TEXT,
	club TEXT,
	overall INT,
	potential INT,
	value_eur INT,
	wage_eur INT,
	player_positions TEXT,
	preferred_foot TEXT,
	international_reputation INT,
	weak_foot INT,
	skill_moves INT,
	work_rate TEXT,
	body_type TEXT,
	real_face TEXT,
	release_clause_eur INT,
	player_tags TEXT,
	team_position TEXT,
	team_jersey_number INT,
	loaned_from TEXT, 
	joined TIMESTAMP,
	contract_valid_until INT,
	nation_position TEXT,
	nation_jersey_number INT,
	pace INT,
	shooting INT,
	passing INT,
	dribbling INT,
	defending INT,
	physic INT,
	gk_diving INT,
	gk_handling INT,
	gk_kicking INT,
	gk_reflexes INT,
	gk_speed INT,
	gk_positioning INT,
	player_traits TEXT,
	attacking_crossing INT,
	attacking_finishing INT,
	attacking_heading_accuracy INT,
	attacking_short_passing INT,
	attacking_volleys INT,
	skill_dribbling INT,
	skill_curve INT,
	skill_fk_accuracy INT,
	skill_long_passing INT,
	skill_ball_control INT,
	movement_acceleration INT,
	movement_sprint_speed INT,
	movement_agility INT,
	movement_reactions INT,
	movement_balance INT,
	power_shot_power INT,
	power_jumping INT,
	power_stamina INT,
	power_strength INT,
	power_long_shots INT,
	mentality_aggression INT,
	mentality_interceptions INT,
	mentality_positioning INT,
	mentality_vision INT,
	mentality_penalties INT,
	mentality_composure INT,
	defending_marking INT,
	defending_standing_tackle INT,
	defending_sliding_tackle INT,
	goalkeeping_diving INT,
	goalkeeping_handling INT,
	goalkeeping_kicking INT,
	goalkeeping_positioning INT,
	goalkeeping_reflexes INT,
	ls TEXT,
	st TEXT,
	rs TEXT,
	lw TEXT,
	lf TEXT,
	cf TEXT,
	rf TEXT,
	rw TEXT,
	lam TEXT,
	cam TEXT,
	ram TEXT,
	lm TEXT,
	lcm TEXT,
	cm TEXT,
	rcm TEXT,
	rm TEXT,
	lwb TEXT,
	ldm TEXT,
	cdm TEXT,
	rdm TEXT,
	rwb TEXT,
	lb TEXT,
	lcb TEXT,
	cb TEXT,
	rcb TEXT,
	rb TEXT,
	team_id UUID
);