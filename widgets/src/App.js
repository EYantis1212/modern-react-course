import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
	{
		title: 'What is React?',
		content: 'React is a front-end JavaScript Framework',
	},
	{
		title: 'Why use React?',
		content: 'Favorite JS Library among engineers',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components',
	},
];

const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
	{
		label: 'The Color Blue',
		value: 'blue',
	},
];
export default () => {
	return (
		<div>
			<Dropdown options={options} />
		</div>
	);
};
