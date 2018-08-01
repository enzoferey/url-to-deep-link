import { expect } from "chai";
import { ANDROID_TARGET, IOS_TARGET } from "../lib";
import apps from "../lib/apps";

global.expect = expect;
global.ANDROID_TARGET = ANDROID_TARGET;
global.IOS_TARGET = IOS_TARGET;
global.apps = apps;
