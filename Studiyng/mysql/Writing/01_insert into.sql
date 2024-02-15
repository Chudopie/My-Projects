insert into pokeusers (pokeid,pokename,poketype) values(152,"chikorita","planta")
/*agrega un pokemon mas*/

--ejemplo agregar uno sin identificador?
insert into pokeusers (pokeid,pokename,poketype) values("paco","perez")
--se auto agrega porque el id se autoincrementa aunque no se agregue

insert into pokeusers (pokeid,pokename,poketype) values(155,"paco","perez")
-- se agrega el autoincremento pero se brinca el numero en el que estaba, se salta el identificador;
