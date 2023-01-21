-- Table: users

-- DROP TABLE users;

CREATE TABLE users
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying(50) NOT NULL,
    email character varying(30),
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

ALTER TABLE users
    OWNER to postgres;

-- INSERT data

INSERT INTO
    users (name, email)
VALUES
    ('user1', 'user1@mail.com'),
    ('user2', 'user2@mail.com'),
    ('user3', 'user3@mail.com');