import React from 'react';
import ReactDOM from 'react-dom/client';

import { Counter } from './01-useState/Counter';
import { HooksApp } from './HooksApp';
import { CustomHook } from './01-useState/CustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';

import './index.css';
import { Memorize } from './05-memo/Memorize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <Counter /> */}
    {/* <CustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    <Memorize />
  </React.StrictMode>
);
