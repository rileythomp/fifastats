UPDATE players_20 p
SET p.team_id = t.id
FROM teams_20 t
WHERE p.club = t.team_name;
