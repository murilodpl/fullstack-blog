create schema he4rtbackend;

create table he4rtbackend.users (
    id serial primary key,
    email text unique not null,
    password text not null,
    name text not null,
    admin boolean not null default FALSE
);

insert into he4rtbackend.users (email, password, name, admin)
values
    ('murilo@gmail.com', '123', 'Murilo', false),
    ('admin@gmail.com', '123', 'Admin', true);