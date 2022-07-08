import React from 'react'

function ElasticSearch({elasticData}) {
  return (
    <div  >
      {elasticData.map((search, key) => (
        <div className='w-full pr-40 bg-gray-200 shadow-gray rounded mb-2 p-1' key={key}>
          <h3>{search.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default ElasticSearch