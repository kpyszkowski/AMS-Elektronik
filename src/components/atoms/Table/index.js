import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
	border-spacing: 0;
	table-layout: fixed;
	border-collapse: collapse;
	border-radius: 10px;
	overflow: hidden;
	margin: 0 auto;

	thead {
		background-color: crimson;
		color: white;
		font-weight: bold;
		text-align: center;
	}

	tbody {
		text-align: center;
	}

	tr {
		&:nth-child(even) {
			background-color: rgb(220, 20, 60, 0.1);
		}

		&:nth-child(odd) {
			background-color: rgb(220, 20, 60, 0.2);
		}
	}

	th,
	td {
		padding: 0 15px;
	}
`;

const Table = ({ children }) => <StyledTable>{children}</StyledTable>;

export default Table;
