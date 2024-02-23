select count(ataque) from pokeusers group by ataque;

select max(ataque) from pokeusers group by ataque;

select count(ataque), ataque from pokeusers where ataque > 5 group by ataque order by ataque asc;