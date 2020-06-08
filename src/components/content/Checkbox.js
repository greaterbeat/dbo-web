import React from 'react';

export function Checkbox({onChange, checked, title, dataId}) {
    return (
      <div>
       <>
           <input type="checkbox" onChange={onChange} title={title} checked={checked} dataId={dataId}/>
               {title}
       </>
      </div>
    );
}
