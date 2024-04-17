SELECT 
    table1.id,
    table1.name,
    table2.name AS parent_name
FROM
    data_nama table1
LEFT JOIN
    data_nama table2 
ON 
    table1.parent_id = table2.id;