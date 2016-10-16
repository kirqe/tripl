import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

import React from 'react';
import { render } from 'react-dom';
import { Layout } from './components';

render(<Layout />, document.getElementById('app'));
