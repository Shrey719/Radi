import * as fslib from "/lib/idb_lib.js";

await fslib.initFS();
console.log("Created rootfs indexedDB");

await fslib.setFS("fs", "fs", "rootfs", JSON.stringify({
    bin: [
        {
            isSymlink: true,
            symlinkType: "realfile",
            executable: "true",
            type: "file",
            target: "/jsx/sh.js"
        },
        {
            isSymlink: true,
            type: "file",
            symlinkType: "realfile",
            target: "/jsx/uv.js",
            executable: "true",
        },
        
        {
            isSymlink: true,
            symlinkType: "real",
            type: "file",
            target: "/jsx/uv.js",
            executable: "true",
        }],
    sbin: [],
    lib: [],
    usr: [
        {
            name: "bin",
        },
        {
            name: "local",
            subdirs: {
                name: "bin",
            },
        },
    ],

    etc: {},
    home: {},
    proc: {},
}));

console.log("Created rootfs");

let rootfs = await fslib.getFS("fs", "fs", "rootfs");

console.log(JSON.parse(rootfs.value));

let flags = JSON.parse(localStorage.getItem("flags"))
flags.OOBE_WENT = true

localStorage.setItem("flags", JSON.stringify(flags));
location.href = "/"