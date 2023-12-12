SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE DATABASE "transactiondb";
\c transactiondb

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;

SET default_tablespace = '';

SET default_table_access_method = heap;

CREATE TYPE transaction_type AS ENUM ('credit', 'debit');

CREATE TABLE transactions (
  id UUID DEFAULT uuid_generate_v4(),
  user_id VARCHAR(255) NOT NULL,
  amount INTEGER NOT NULL,
  type transaction_type NOT NULL,
  PRIMARY KEY (id)
)
