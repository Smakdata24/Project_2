-- Table: public.survey

-- DROP TABLE public.survey;

CREATE TABLE public.survey
(
    survey_name character varying COLLATE pg_catalog."default",
    interview_date date[],
    satis_score integer,
    ease_score integer,
    likely_recomm integer,
    login_rating integer,
    nav_rating integer,
    web_rating integer,
    func_rating integer,
    ibiz_rating integer,
    features_rating integer,
    security_rating integer,
    dept_org_unit character varying COLLATE pg_catalog."default",
    prod_type character varying COLLATE pg_catalog."default",
    age integer
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.survey
    OWNER to postgres;
	
SELECT * FROM survey;

