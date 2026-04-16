---
title: "原神 5.3 Grasscutter & 3DMigoto"
pubDate: 2025-05-09
description: ""
---

## 部署本地服务器

1. 安装 MongoDB、JDK 17、Node.js、mitmproxy、Python；

2. 启动 MongoDB：
   ```
   $ sudo systemctl enable --now mongodb
   ```
   
3. 克隆 [Kei-Luna/LunaGC_5.3.0](https://github.com/Kei-Luna/LunaGC_5.3.0)，并编译：
   ```
   $ chmod +x gradlew
   $ ./gradlew jar
   ```
   
4. 克隆 [pmagixc/5.3-res](https://github.com/pmagixc/5.3-res)，重命名为 `resources`，置于 LunaGC_5.3.0 根目录；

5. 获取 [MlgmXyysd/Grasscutter](https://github.com/MlgmXyysd/Grasscutter) `proxy.py` `proxy_config.py`，置于 LunaGC_5.3.0 根目录；

6. 启动 Grasscutter：
   ```
   $ cd /path/to/LunaGC_5.3.0
   $ mitmdump -s proxy.py & \
   $ sudo /usr/lib/jvm/java-17-openjdk/bin/java -jar LunaGC-5.3.0.jar
   ```

## 本地游玩

1. 安装 Wine-Tkg-Staging、Lutris；

2. 下载 5.3 游戏数据，并将 `GenshinImpact_Data/Plugins/Astrolabe.dll` 替换为 `LunaGC_5.3.0/patch/Astrolabe.dll`；

3. 启动 Lutris，添加环境变量：

   | Key | Value |
   |---|---|
   | http_proxy | http://localhost:8080 |
   | https_proxy | http://localhost:8080 |
  
4. 添加游戏。

## 自定义模组

1. Lutris 设置：开启 `Advanced`；启用 `Wine-Tkg-Staging`；关闭 `VKD3D` `DLSS` `FSR` `Anti-Cheat`；

2. 由 [SilentNightSound/GI-Model-Importer](https://github.com/SilentNightSound/GI-Model-Importer) 下载 3DMigoto-GIMI；

3. 创建 `launch.bat`，并设为 Lutris 游戏主程序：
   ```
   cd C:\path\to\3dmigoto\
   start "" "3DMigoto Loader.exe"

   cd C:\path\to\GenshinImpact\
   start "" "GenshinImpact.exe"
   ```
   
4. 自定义模组请置于 3dmigoto-gimi/Mods/，游戏中可按 `F1` 查看帮助。
