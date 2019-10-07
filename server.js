const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
	const customers = [
		{ id: 1, firstName: 'Kai', lastName: 'Sawamoto' },
		{ id: 2, firstName: 'Taro', lastName: 'Aso' },
		{ id: 3, firstName: 'Shizo', lastName: 'Abe' }
	];

	res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Sever started on port ${port}`));
