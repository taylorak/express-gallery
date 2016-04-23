DROP DATABASE IF EXISTS gallery_test;
DROP DATABASE IF EXISTS gallery_development;
DROP DATABASE IF EXISTS gallery_production;

DROP USER IF EXISTS gallery_user;
CREATE USER gallery_user;

CREATE DATABASE gallery_test OWNER gallery_user;
CREATE DATABASE gallery_development OWNER gallery_user;
CREATE DATABASE gallery_production OWNER gallery_user;