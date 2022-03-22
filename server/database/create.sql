create schema he4rtbackend;

create table he4rtbackend.users (
    id serial primary key,
    email text not null,
    password text not null
);

insert into he4rtbackend.users
values ('murilo@gmail.com', 'admin');