#!/usr/bin/env node
import { str, brainGCD } from '../src/game/func-gcd.js';
import { brainGameStart } from '../src/gameBody.js';

brainGameStart(str, brainGCD);
