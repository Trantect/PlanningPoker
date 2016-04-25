#!/usr/bin/env python
#coding: utf-8

import os
import subprocess

if not (os.path.isdir("build")):
    os.mkdir(os.path.realpath(".") + "/build");

if not (os.path.isdir("build/images")):
    os.mkdir(os.path.realpath("./build") + "/images");

subprocess.check_call("cp -f src/index.html build/index.html", shell=True)
subprocess.check_call("cp -f src/offline.manifest build/offline.manifest", shell=True)
subprocess.check_call("cp -rf src/images/icon build/images/", shell=True)
subprocess.check_call("webpack", shell=True)
