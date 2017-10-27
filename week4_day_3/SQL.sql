
--  1.  What are all projects that use JavaScript?

SELECT project.name FROM project
	JOIN project_uses_tech
	ON project_uses_tech.project_id = project.id
	JOIN tech
	ON project_uses_tech.tech_id = tech.id
	WHERE tech.name = 'JavaScript';

-- Another way to do the above query:

SELECT project.name FROM project, tech, project_uses_tech
	WHERE project.id = project_uses_tech.project_id
	AND tech.id = project_uses_tech.tech_id
	AND tech.name = 'JavaScript';

--  2.  What are all technologies used by the Personal Website?

SELECT tech.name FROM tech
	JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id
	JOIN project ON project_uses_tech.project_id = project.id WHERE project.id = 4;

--  3.  Perform a left outer join from the tech table to the project_uses_tech
--      table - which techs has no associated project?

SELECT tech.name FROM tech
  LEFT OUTER JOIN project_uses_tech
  ON project_uses_tech.tech_id = tech.id
  WHERE project_uses_tech.project_id IS NULL;

--  4.  Based on the previous query, get the count of the number of techs
--			used by each project.

SELECT project.name, count(project_uses_tech.project_id)
  AS techs_used FROM project
  LEFT OUTER JOIN project_uses_tech
  ON project_uses_tech.project_id = project.id
  GROUP BY project.name ORDER BY techs_used;

--  5.  Perform a left outer join from the project table to the
--      project_users_tech table - which projects has no associated tech?

SELECT project.name FROM project
  LEFT OUTER JOIN project_uses_tech
  ON project_uses_tech.project_id = project.id
  WHERE project_uses_tech.tech_id IS NULL;

--  6.  Based on the previous query, get the count of the number of projects
--      that use each tech.

SELECT tech.name, count(project_uses_tech.tech_id)
AS project_count FROM tech
LEFT OUTER JOIN project_uses_tech
ON project_uses_tech.tech_id = tech.id
GROUP BY tech.name ORDER BY project_count;

--  7.  List all projects along with each technology used by it.
--      You will need to do a three-way join.

SELECT project.name AS project_name, tech.name AS tech_used
  FROM project
	LEFT OUTER JOIN project_uses_tech
  ON project_uses_tech.project_id = project.id
	LEFT OUTER JOIN tech
  ON project_uses_tech.tech_id = tech.id
  ORDER BY project.name;

--	8.	List all the distinct techs that are used by at least one project.

SELECT DISTINCT(tech.name)
	FROM tech, project_uses_tech, project
	WHERE project_uses_tech.tech_id = tech.id
	AND project_uses_tech.project_id IS NOT NULL;

--	9.	List all the distinct techs that are not used by any projects.

SELECT DISTINCT(tech.name)
FROM project
RIGHT OUTER JOIN project_uses_tech
ON project_uses_tech.project_id = project.id
RIGHT OUTER JOIN tech
ON project_uses_tech.tech_id = tech.id
WHERE project_uses_tech.project_id IS NULL GROUP BY tech.name;

--	10.	List all the distinct projects that use at least one tech.

SELECT DISTINCT(project.name)
FROM project, project_uses_tech, tech
WHERE project_uses_tech.tech_id = tech.id
AND project_uses_tech.project_id = project.id
GROUP BY project.name;

--	11.	List all the distinct projects that use no tech.

SELECT DISTINCT(project.name)
FROM project
LEFT OUTER JOIN project_uses_tech
ON project_uses_tech.project_id = project.id
LEFT OUTER JOIN tech
ON project_uses_tech.tech_id = tech.id
WHERE project_uses_tech.tech_id IS NULL;

--	12.	Order the projects by how many tech it uses.

SELECT project.name, Count(project_uses_tech.tech_id)
FROM project
LEFT OUTER JOIN project_uses_tech
ON project_uses_tech.project_id = project.id
LEFT OUTER JOIN tech
ON project_uses_tech.tech_id = tech.id
GROUP BY project.name ORDER BY count DESC;

--	13.	Order the tech by how many projects use it.

SELECT tech.name, Count(project_uses_tech.project_id)
FROM tech
LEFT OUTER JOIN project_uses_tech
ON project_uses_tech.tech_id = tech.id
LEFT OUTER JOIN project
ON project_uses_tech.project_id = project.id
GROUP BY tech.name ORDER BY count DESC;

--	14.	What is the average number of techs used by a project?

SELECT AVG(COUNT)
FROM (SELECT project.name, Count(project_uses_tech.tech_id)
FROM project
LEFT OUTER JOIN project_uses_tech
ON project_uses_tech.project_id = project.id
LEFT OUTER JOIN tech
ON project_uses_tech.tech_id = tech.id
GROUP BY project.name) AS avg;
© 2017 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
