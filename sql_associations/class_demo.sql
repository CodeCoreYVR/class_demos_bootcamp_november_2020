-- Demo: Find the title of all the projects by the student with id 2
SELECT student_id, title
FROM projects
WHERE student_id=2;

-- Get all student ids and scores for the course with an id of 1.
SELECT student_id, score
FROM enrolments
WHERE course_id=1;

-- Cross join the students with the project table

SELECT * FROM students CROSS JOIN projects;

SELECT students.id AS std_id,
first_name, title AS project_title
FROM students 
INNER JOIN projects ON students.id=projects.student_id
ORDER BY students.first_name;


-- Students from courses - Many to Many relationship through enrollment table

SELECT students.*, courses.title AS course_title, score
FROM students
INNER JOIN enrolments ON students.id = enrolments.student_id
INNER JOIN courses ON enrolments.course_id=courses.id
WHERE 
courses.title ILIKE '%hybrid matrix%'; 

-- Find all the courses that have at least one student whose name begins with 'Re'
-- Show the course title, student names and their scores

SELECT courses.title, students.first_name, enrolments.score
FROM students
INNER JOIN enrolments ON students.id = enrolments.student_id
INNER JOIN courses ON enrolments.course_id=courses.id
WHERE students.first_name ILIKE 'Re%';

-- Outer Join / Left Join / Right Join
-- Outer Join
SELECT * FROM students
FULL OUTER JOIN projects
ON students.id=projects.student_id;

SELECT students.*, projects.title FROM students
FULL OUTER JOIN projects
ON students.id=projects.student_id;
-- Left Join
SELECT * FROM students 
LEFT JOIN projects
ON students.id= projects.student_id;

-- Right Join
SELECT * FROM students 
RIGHT JOIN projects
ON students.id= projects.student_id;
-- Select only students that do not have a projects

SELECT first_name, last_name, projects.title AS project_title
FROM students
LEFT JOIN projects On students.id = projects.student_id;

-- Without Project

SELECT first_name, last_name, projects.title AS project_title
FROM students
LEFT JOIN projects On students.id = projects.student_id;
WHERE projects.title IS NULL;

-- List the average score of each course with higher averages on top displaying the course title and the score average

SELECT courses.title, ROUND(AVG(enrolments.score),2) AS average_score FROM courses
INNER JOIN enrolments ON courses.id=enrolments.course_id
GROUP BY courses.title
ORDER BY average_score DESC;

-- List courses ordered by the last registered student showing the course title and the registration date

SELECT courses.id, courses.title, MAX(enrolments.created_at) AS recent FROM courses
INNER JOIN enrolments ON courses.id = enrolments.course_id 
GROUP BY courses.id
ORDER BY recent DESC;

-- Select all students grouping them by their ages while aggregating their first_name into and array and counting the number of occurences and ordering by them.

SELECT ARRAY_AGG(first_name), age ,count(*) AS age_count
FROM students
GROUP BY age
ORDER BY age_count DESC;

-- SUB QUERY
-- List all the courses with at least 5 enrolled students
-- show the number of enrolled students and course title
-- Order by the number of enrolled students

SELECT * FROM (
 SELECT courses.title, count(*) AS student_count
 FROM courses 
 INNER JOIN enrolments ON courses.id =enrolments.course_id
 GROUP BY courses.id
 ORDER BY student_count DESC
) AS student_count
WHERE student_count >=5;

-- IN
-- lets you specify multiple values for a WHERE clause

SELECT id, first_name, last_name
FROM students
WHERE id IN (2,3,4,500,1000); 

-- Constraints 
-- UNIQUE

ALTER TABLE students
ADD CONSTRAINT unique_email
UNIQUE (email);

CREATE TABLE cars
(
    make VARCHAR(50) CONSTRAINT must_exist NOT NULL,
    model VARCHAR(50) CONSTRAINT must_exist NOT NULL
);
