create database todo_db;

use todo_db;

create table todo
(
    id   int auto_increment
        primary key,
    text varchar(256) null,
    done binary(1)    null
);

insert into todo (text, done) values ('Eat Lunch', 0);
insert into todo (text, done) values ('Eat Dinner', 0);