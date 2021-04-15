--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2 (Debian 13.2-1.pgdg100+1)
-- Dumped by pg_dump version 13.2

-- Started on 2021-04-15 20:51:06

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

--
-- TOC entry 2995 (class 1262 OID 13395)
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

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

--
-- TOC entry 2996 (class 0 OID 0)
-- Dependencies: 2995
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 24645)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    "ID" integer NOT NULL,
    name character varying(2000) NOT NULL,
    price numeric(10,2),
    date date,
    shop_id integer,
    picture character varying[]
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 24643)
-- Name: product_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."product_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."product_ID_seq" OWNER TO postgres;

--
-- TOC entry 2997 (class 0 OID 0)
-- Dependencies: 209
-- Name: product_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."product_ID_seq" OWNED BY public.product."ID";


--
-- TOC entry 201 (class 1259 OID 16408)
-- Name: seller; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.seller (
    "ID" integer NOT NULL,
    seller_name character varying(500),
    email character varying(100),
    password character varying(100),
    id_no character varying(100),
    mobile character varying(20),
    location character varying(500),
    address character varying(500),
    photo character varying(500)
);


ALTER TABLE public.seller OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16406)
-- Name: seller_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."seller_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."seller_ID_seq" OWNER TO postgres;

--
-- TOC entry 2998 (class 0 OID 0)
-- Dependencies: 200
-- Name: seller_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."seller_ID_seq" OWNED BY public.seller."ID";


--
-- TOC entry 208 (class 1259 OID 16440)
-- Name: seller_shop; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.seller_shop (
    seller_id integer NOT NULL,
    shop_id integer NOT NULL,
    joined_on time without time zone
);


ALTER TABLE public.seller_shop OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16436)
-- Name: seller_shop_seller_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seller_shop_seller_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seller_shop_seller_id_seq OWNER TO postgres;

--
-- TOC entry 2999 (class 0 OID 0)
-- Dependencies: 206
-- Name: seller_shop_seller_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seller_shop_seller_id_seq OWNED BY public.seller_shop.seller_id;


--
-- TOC entry 207 (class 1259 OID 16438)
-- Name: seller_shop_shop_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seller_shop_shop_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seller_shop_shop_id_seq OWNER TO postgres;

--
-- TOC entry 3000 (class 0 OID 0)
-- Dependencies: 207
-- Name: seller_shop_shop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seller_shop_shop_id_seq OWNED BY public.seller_shop.shop_id;


--
-- TOC entry 205 (class 1259 OID 16427)
-- Name: shop; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shop (
    "ID" integer NOT NULL,
    name character varying(500),
    location character varying(100),
    category integer[],
    established date,
    rating character varying(10),
    isonline boolean,
    active boolean,
    address character varying
);


ALTER TABLE public.shop OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16425)
-- Name: shop_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."shop_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."shop_ID_seq" OWNER TO postgres;

--
-- TOC entry 3001 (class 0 OID 0)
-- Dependencies: 204
-- Name: shop_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."shop_ID_seq" OWNED BY public.shop."ID";


--
-- TOC entry 203 (class 1259 OID 16419)
-- Name: shop_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shop_category (
    "ID" integer NOT NULL,
    type character varying(500),
    icon character varying(100)
);


ALTER TABLE public.shop_category OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16417)
-- Name: shop_category_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."shop_category_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."shop_category_ID_seq" OWNER TO postgres;

--
-- TOC entry 3002 (class 0 OID 0)
-- Dependencies: 202
-- Name: shop_category_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."shop_category_ID_seq" OWNED BY public.shop_category."ID";


--
-- TOC entry 2838 (class 2604 OID 24648)
-- Name: product ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN "ID" SET DEFAULT nextval('public."product_ID_seq"'::regclass);


--
-- TOC entry 2833 (class 2604 OID 16411)
-- Name: seller ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seller ALTER COLUMN "ID" SET DEFAULT nextval('public."seller_ID_seq"'::regclass);


--
-- TOC entry 2836 (class 2604 OID 16443)
-- Name: seller_shop seller_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seller_shop ALTER COLUMN seller_id SET DEFAULT nextval('public.seller_shop_seller_id_seq'::regclass);


--
-- TOC entry 2837 (class 2604 OID 16444)
-- Name: seller_shop shop_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seller_shop ALTER COLUMN shop_id SET DEFAULT nextval('public.seller_shop_shop_id_seq'::regclass);


--
-- TOC entry 2835 (class 2604 OID 16430)
-- Name: shop ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shop ALTER COLUMN "ID" SET DEFAULT nextval('public."shop_ID_seq"'::regclass);


--
-- TOC entry 2834 (class 2604 OID 16422)
-- Name: shop_category ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shop_category ALTER COLUMN "ID" SET DEFAULT nextval('public."shop_category_ID_seq"'::regclass);


--
-- TOC entry 2989 (class 0 OID 24645)
-- Dependencies: 210
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product ("ID", name, price, date, shop_id, picture) FROM stdin;
1	গিটার স্ট্	500.80	2021-04-14	1	{dgsd}
2	গিটার স্ট্রিং	500.80	2021-04-14	1	{sfasf,safasrqwetwq}
3	গিটার স্ট্রিং	500.80	2021-04-14	1	{sfasf,safasrqwetwq}
\.


--
-- TOC entry 2980 (class 0 OID 16408)
-- Dependencies: 201
-- Data for Name: seller; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.seller ("ID", seller_name, email, password, id_no, mobile, location, address, photo) FROM stdin;
1	Deepjyoti	asfasf	1234	\N	9477129978	5.6,8.5	Talpukur ROad	asfsafas
\.


--
-- TOC entry 2987 (class 0 OID 16440)
-- Dependencies: 208
-- Data for Name: seller_shop; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.seller_shop (seller_id, shop_id, joined_on) FROM stdin;
1	5	16:47:15.259556
1	6	16:47:50.68266
1	7	16:48:13.847227
1	8	16:50:07.08611
1	1	\N
\.


--
-- TOC entry 2984 (class 0 OID 16427)
-- Dependencies: 205
-- Data for Name: shop; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shop ("ID", name, location, category, established, rating, isonline, active, address) FROM stdin;
1	asfas	0.0,5.5	{9,11}	1992-01-01	\N	f	t	sgasg
2	Disha Book Stall	0,23.505	{9,11}	1992-01-01	\N	f	t	21/1 Chanditala Lane, Naihati - 743165
3	Disha Book Stall	0,23.505	{9,11}	1992-01-01	\N	f	t	21/1 Chanditala Lane, Naihati - 743165
4	Disha Book Stall	0,23.505	{9,11}	1992-01-01	\N	f	t	21/1 Chanditala Lane, Naihati - 743165
5	Disha Book Stall	0,23.505	{9,11}	1992-01-01	\N	f	t	21/1 Chanditala Lane, Naihati - 743165
6	Disha Book Stall	0,23.505	{9,11}	1992-01-01	\N	f	t	21/1 Chanditala Lane, Naihati - 743165
7	Disha Book Stall	0,23.505	{9,11}	1992-01-01	\N	f	t	21/1 Chanditala Lane, Naihati - 743165
8	Disha Book Stall	0,23.505	{9,11}	1992-01-01	\N	f	t	21/1 Chanditala Lane, Naihati - 743165
\.


--
-- TOC entry 2982 (class 0 OID 16419)
-- Dependencies: 203
-- Data for Name: shop_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shop_category ("ID", type, icon) FROM stdin;
9	Electronics	\N
10	Apparel and Clothing	\N
11	Games	\N
\.


--
-- TOC entry 3003 (class 0 OID 0)
-- Dependencies: 209
-- Name: product_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."product_ID_seq"', 3, true);


--
-- TOC entry 3004 (class 0 OID 0)
-- Dependencies: 200
-- Name: seller_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."seller_ID_seq"', 1, true);


--
-- TOC entry 3005 (class 0 OID 0)
-- Dependencies: 206
-- Name: seller_shop_seller_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seller_shop_seller_id_seq', 1, false);


--
-- TOC entry 3006 (class 0 OID 0)
-- Dependencies: 207
-- Name: seller_shop_shop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seller_shop_shop_id_seq', 1, false);


--
-- TOC entry 3007 (class 0 OID 0)
-- Dependencies: 204
-- Name: shop_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."shop_ID_seq"', 8, true);


--
-- TOC entry 3008 (class 0 OID 0)
-- Dependencies: 202
-- Name: shop_category_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."shop_category_ID_seq"', 11, true);


--
-- TOC entry 2848 (class 2606 OID 24653)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY ("ID");


--
-- TOC entry 2840 (class 2606 OID 16416)
-- Name: seller seller_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seller
    ADD CONSTRAINT seller_pkey PRIMARY KEY ("ID");


--
-- TOC entry 2846 (class 2606 OID 16446)
-- Name: seller_shop seller_shop_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seller_shop
    ADD CONSTRAINT seller_shop_pkey PRIMARY KEY (seller_id, shop_id);


--
-- TOC entry 2842 (class 2606 OID 16424)
-- Name: shop_category shop_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shop_category
    ADD CONSTRAINT shop_category_pkey PRIMARY KEY ("ID");


--
-- TOC entry 2844 (class 2606 OID 16435)
-- Name: shop shop_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shop
    ADD CONSTRAINT shop_pkey PRIMARY KEY ("ID");


-- Completed on 2021-04-15 20:51:07

--
-- PostgreSQL database dump complete
--

