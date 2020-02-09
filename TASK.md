# Task:

### Description

Congratulations on passing the initial screening and moving to the next phase of your
application process. We are thrilled that you are interested in joining our team and are
looking forward to seeing what you can accomplish. The following challenge is meant to
help us understand your overall experience level and ability to complete tasks that will
be similar to your daily job.

### Challenge details

Your goal is to load the data build automation test framework to verify the data what
has been stored from flat file matches the data in Document Database (mongoDB) and
triggered appropriate events.
Here is the sample data from flat file:
Program Identifier|Data Source|Card Number|Member ID|First Name|Last
Name|Date of Birth|Address 1|Address 2|City|State|Zip code|Telephone
number|Email Address|CONSENT|Mobile Phone
50777445|WEB 3RD PARTY|342121211|43233|LOAD|TEST 0|04/29/2000|3100 S
Ashley Drive||Chandler|AZ|85286||test0@humancaresystems.com|Y|1234567912
50777445|WEB 3RD PARTY|564232340|12045|LOAD|TEST 1|03/20/1969|3100 S
Ashley Drive||Chandler|AZ|85286||test1@humancaresystems.com|Y|1234567890
50777445|WEB 3RD PARTY|564232341|12145|LOAD|TEST 2|03/01/1969|3100 S
Ashley Drive||Chandler|AZ|85286||test2@humancaresystems.com|Y|6177504302
50777445|WEB 3RD PARTY|564232342|12245|LOAD|TEST 3|03/02/1969|3100 S
Ashley Drive||Chandler|AZ|85286||test3@humancaresystems.com|Y|6177504303
50777445|WEB 3RD PARTY|564232343|12445|LOAD|TEST 4|03/03/1969|3100 S
Ashley Drive||Chandler|AZ|85286||test4@humancaresystems.com|N|6177504384
50777445|WEB 3RD PARTY|564232344|13245|LOAD|TEST 5|03/04/1969|3100 S
Ashley Drive||Chandler|AZ|85286||test5@humancaresystems.com|N|6177504305
50777445|WEB 3RD PARTY|564232345|14545|LOAD|TEST 6|03/05/1969|3100 S
Ashley Drive||Chandler|AZ|85286||test6@humancaresystems.com|N|6177504306
50777445|WEB 3RD PARTY|564232346|15245||TEST 7|03/06/1969|3100 S Ashley
Drive||Chandler|AZ|85286||test7@humancaresystems.com|Y|6177504307
50777445|WEB 3RD PARTY|564232347|15545|LOAD|TEST 8|03/07/1969|3100 S
Ashley Drive||Chandler|AZ|85286||test8@humancaresystems.com|N|6177504308
50777445|WEB 3RD PARTY|564232348|16445|LOAD|TEST 9|03/08/1969|3100 S
Ashley Drive||Chandler|AZ|85286||test9@humancaresystems.com|N|6177504309
50777445|WEB 3RD PARTY|564232349|16345||TEST 10|03/09/1969|3100 S Ashley
Drive||Chandler|AZ|85286||test10@humancaresystems.com|N|6177504310
50777445|WEB 3RD PARTY|564232350|16245|LOAD|TEST 11|03/10/1969|3100 S
Ashley Drive||Chandler|AZ|85286|||Y|6177504311
50777445|WEB 3RD PARTY|564232365|17445|LOAD|TEST 12|03/11/1969|3100 S
Ashley Drive||Chandler|AZ|85286||test12@humancaresystems.com|N|6177504312
50777445|WEB 3RD PARTY|564232363|17345|LOAD|TEST 13|03/12/1969|3100 S
Ashley Drive||Chandler|AZ|85286||test13@humancaresystems.com|Y|6177504313
50777445|WEB 3RD PARTY|564232360|19845|LOAD|TEST 14|03/13/1969|3100 S
Ashley Drive||Chandler|AZ|85286||test14@humancaresystems.com|N|617750431450777445|WEB 3RD PARTY|564232423|4542323|LOAD|TEST 15|04/29/2000|3100 S
Ashley Drive||Chandler|AZ|85286||test15@humancaresystems.com|N|132342323
50777445|BENCHWORKS|56221312|32323|LOAD|TEST 16|04/20/2001|3100 S Ashley
Drive||Chandler|AZ|85286||test16@humancaresystems.com|Y|1234567890
50777445|WEB 3RD PARTY|53434323|12345|LOAD|TEST 17|04/29/19871|3100 S
Ashley Drive||Chandler|AZ|85286||test17@humancaresystems.com|N|1234567890
-
-
-
Create a mechanism to load the above data to MongoDB.
Should have two Collections:
* Patients
* EMAIL
* Create a multiple emails for patients who have CONSENT as Yes with in the file.
* Day 1
* Day 2
* Day 3
o Day 4
Create an Automation script and produce a report with following Test Cases and
results.
o Verify the data in flat file matches the data in patient collection
o Patient IDs - where first name is missing
o Patient IDs - Email address is missing but consent is Y
o Verify Emails were created in Email Collection for patients who have
CONSENT as Y
o Verify the Email schedule matches with the above.
This exercise is intended to display a demonstration of understanding so the more you
can show, the better.
This framework will need to consist of a minimum of:
 Functioning DB
 Testcase Summary (CSV or Excel format)

### Guidance:

Feel free to use selenium/cucumber or bash script or any automation framework you
prefer.Deliverables

1. A working solution that can be cloned from github, installed (using the instructions in
the document), ran, tested and reviewed.
A document highlighting the steps you took to implement the solution (adding
screenshots is encouraged).
Important notes
1. The challenge should not take you more than 5 hours to complete.
2. You should not incur any expenses.
3. If you have any questions, please contact us – this will not negatively impact your
overall evaluation.
Good Luck!


1. Is the main task of the test assignment is to upload data from the files into DB and check all test cases?
1. Yes, exactly


2. This part of the task is unclear:

            EMAIL

            Create multiple emails for patients who have CONSENT as Yes within the file

            Day1

            Day2

            Day3

            Day4

Could clarify a bit more?
2. The idea is to write code that schedules an email to every patient that has the CONSENT field set to ‘Yes’. There should be an email for every day listed in the cadence.


3. Uploading for data in-cab should be done as a preparation stage for running the test or as a separate script?
3. They can implement that however they want, the idea is that they are writing code that does data processing so they should figure out a way to test that it works


4. What is the data build automation yes framework? 
4. Build automation just means that whatever test method they use should be created in a way that can be called during a typical CI\CD process


5. How functioning DB should be implemented in the test assignment?
5. Up to them, they can assume a local copy of Mongo is installed and provide a seed script or they can use a hosted Mongo DB