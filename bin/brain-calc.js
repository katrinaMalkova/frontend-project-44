#!/usr/bin/env node
import { str, brainCalc } from '../src/game/func-calc.js';
import { brainGameStart } from '../src/gameBody.js';

brainGameStart(str, brainCalc);
