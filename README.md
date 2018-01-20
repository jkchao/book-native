# book-native
一个简单的 React-Native(0.53) application，只有两页面。

## 几张图

![](https://raw.githubusercontent.com/jkchao/book-native/master/screenshot/ios.png)

![](https://raw.githubusercontent.com/jkchao/book-native/master/screenshot/android.png)


## 用到的插件

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-navigation](https://github.com/react-navigation/react-navigation)
- [react-native-root-toast](https://github.com/magicismight/react-native-root-toast)

## 一些经验（坑）

项目虽小，经验（坑）却多：

- React-Native(0.53) 有些依赖很难下载成功。（翻墙 + 看脸）
- Icons 下载完，用不了。（react-native link）
- run ios 不明报错。（删除 ios/build 重新编译）
- ios 图标和启动屏尺寸设置。（坑爹）
- run android，出现如下提示：

    ```bash
    Downloading https://services.gradle.org/distributions/gradle-2.14.1-all.zip
    ..........
    ..........
    ```
    需要正确上网。
- ……

如果需要运行体验项目，你可以在 https://github.com/jkchao/book-native 找到源码。

## step
```bash
// clone 
git clone https://github.com/jkchao/book-native.git

cd book-native

npm install 

// ios
npm run dev:ios

// android
npm run dev:android

```