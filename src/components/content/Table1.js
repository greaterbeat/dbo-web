import React from 'react';
import {myStatementData} from '../../my-statement-data';

export function Table({showDate, showTime,showType, showIncome, showOutcome}) {
    const formatMonth = (month) => month < 10 ? '0' + month : month;
    const formatDay = (day) => day < 10 ? '0' + day : day;
    const formatTime = (time) => time < 10 ? '0' + time : time;
    return (
       <div className = "Table1">
        <table>
            <thead>
            <tr>
                {showDate && <th>
                    Дата
                </th>}
                {showTime && <th>
                    Время
                </th>}
                {showType && <th>
                    Тип
                </th>}
                {showIncome && <th>
                    Приход
                </th>}
                {showOutcome && <th>
                    Расход
                </th>}
            </tr>
            </thead>
           <tbody>
            {myStatementData.sort((a,b) => new Date(a.date) - new Date(b.date)).map(el => {
                const tableDate = formatDay(new Date(el.date).getDate()) + '.' + formatMonth(new Date(el.date).getMonth() + 1) + '.' + new Date(el.date).getFullYear();
                const tableTime = formatTime(new Date(el.date).getHours()) + ':' + formatTime(new Date(el.date).getMinutes()) + ':' + formatTime(new Date(el.date).getSeconds());
                return (
                    <tr>
                        {showDate && <td>
                            {tableDate}
                        </td>}
                        {showTime && <td>
                            {tableTime}
                        </td>}
                        {showType && <td>
                            {el.type}
                        </td>}
                        {showIncome && <td className={'green'}>
                            {el.amount > 0 ? el.amount : ''}
                        </td>}
                        {showOutcome && <td className={'red'}>
                            {el.amount < 0 ? -el.amount : ''}
                        </td>}
                    </tr>
                )
            })}
           </tbody>
        </table>
       </div>
    );
}