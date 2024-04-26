#!/usr/bin/env node
import { str, brainPrime } from '../src/game/func-prime.js';
import { brainGameStart } from '../src/gameBody.js';

brainGameStart(str, brainPrime);
