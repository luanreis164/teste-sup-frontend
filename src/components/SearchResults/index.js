
const SearchResults = ({data}) => {

    if(!data || !data.length) return null;


    const resultList = data.map((item)=>{
        return (
        <tr key={item.id}>
            <th width="110"> {item.dataTransferencia} </th>
            <th width="90"> R${item.valor} </th>
            <th width="120"> {item.tipo} </th>
            <th width="150"> {item.nomeOperadorTransacao} </th>
        </tr>)

    })

    return(
    <div className="search-result">
        <ul>{resultList}</ul>
    </div>
    );

};

export default SearchResults;