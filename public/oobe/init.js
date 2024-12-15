import * as fslib from "/lib/idb_lib.js";

await fslib.initFS();
console.log("Created rootfs indexedDB");

await fslib.setFS("fs", "fs", "rootfs", JSON.stringify({
    bin: [
        {
            isSymlink: true,
            name: "Shell",
            symlinkType: "realfile",
            executable: "true",
            type: "file",
            img: "/img/sh.png",
            target: "/jsx/sh.js"
        },
        {
            isSymlink: true,
            type: "file",
            symlinkType: "realfile",
            target: "/jsx/uv.js",
            img: "/img/uv.png",
            name: "Ultravoilet",
            executable: "true",
        },
        
        {
            isSymlink: true,
            symlinkType: "real",
            type: "file",
            name: "Settings",
            img: "/img/settings.png",
            target: "/jsx/Settings.js",
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

let rootfs = await fslib.getFS();

console.log(JSON.parse(rootfs));

let flags = JSON.parse(localStorage.getItem("flags"))
flags.OOBE_WENT = true

localStorage.setItem("flags", JSON.stringify(flags));
//location.href = "/"