import React from 'react';
import {Checkbox} from './Checkbox';
import {Table} from './Table1';
import {TableGroup} from './Table2';

const initialState = {
    showDate: true,
    showTime: true,
    showType: true,
    showIncome: true,
    showOutcome: true,
};

export function Content() {
    const [{
        showDate,
        showTime,
        showType,
        showIncome,
        showOutcome,
    }, setCheckboxState] = React.useState(initialState);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onChangeCheckbox = e => {
        const attr = e.target.getAttribute('dataId');
        const checked = e.target.checked;
        setCheckboxState(prevState => {
            const countChecked = Object.values(prevState).reduce((acc, el) => el ? acc + 1 : acc, 0);
            if (countChecked === 1 && !checked) {
                return prevState;
            }
            return {
                ...prevState,
                [attr]: checked,
            };
        });
    };

    const onChangeSelect = e => {
        setSelectedIndex(e.target.selectedIndex);
    };
    return (
        <div className="App-content">
           <div className="sideBar">
            <div className="Checkbox">
            <Checkbox
                checked={showDate}
                title={'Показать дату'}
                onChange={onChangeCheckbox}
                dataId={'showDate'}
            />
            <Checkbox
                checked={showTime}
                title={'Показать время'}
                onChange={onChangeCheckbox}
                dataId={'showTime'}
            />
            <Checkbox
                checked={showType}
                title={'Показать тип'}
                onChange={onChangeCheckbox}
                dataId={'showType'}
            />
            <Checkbox
                checked={showIncome}
                title={'Показать приход'}
                onChange={onChangeCheckbox}
                dataId={'showIncome'}
            />
            <Checkbox
                checked={showOutcome}
                title={'Показать расход'}
                onChange={onChangeCheckbox}
                dataId={'showOutcome'}
            />
            </div>
            <div className="selector">
                <h2>Тип группировки</h2>
                <select onChange={onChangeSelect}>
                <option>Без группировки</option>
                <option>По году</option>
            </select>
            </div>
           </div>
            {selectedIndex === 0 ? (
                <Table
                    showDate={showDate}
                    showTime={showTime}
                    showType={showType}
                    showIncome={showIncome}
                    showOutcome={showOutcome}
                />
            ) : (
                <TableGroup/>
            )}
        </div>
    );
}
