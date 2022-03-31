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

create table he4rtbackend.posts (
    id serial primary key,
    title text unique not null,
    content text not null,
    author int references users(id)
);

insert into he4rtbackend.posts (title, content, author)
values
    ('Lorem 01', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 1),
    ('Lorem 02', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 1);