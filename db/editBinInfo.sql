update bin_items 
set name = $1, price = $2
where shelf = $3
and bin_id = $4;