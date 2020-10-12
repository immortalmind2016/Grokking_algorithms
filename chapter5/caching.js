cache = {}
function get_page(url){
    if(cache[url])
        return cache[url] 
    else{
        data = get_data_from_server(url)
    }
    
    cache[url] = "TEWST"
    return data
}
