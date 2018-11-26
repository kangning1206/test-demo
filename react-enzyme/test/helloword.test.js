/*
 * @Author: kangning1206
 * @Date:   2018-11-26 13:21:27
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2018-11-26 19:24:23
 */


// import TestUtils from 'react-addons-test-utils';
// import HelloWord from '../src/helloword';

// function shallowRender(Component, props) {
//   const renderer = TestUtils.createRenderer();
//   renderer.render(<Component {...props}/>);
//   return renderer.getRenderOutput();
// }


// describe('Shallow Rendering', function () {
//   it('hellord', function () {
//     const hellord = shallowRender(HelloWord, {text: 'test...'});
//     expect(hellord.props.children[0].props.children).to.equal('test');
//   });
// });

// 阮一峰 react 测试
// http://www.ruanyifeng.com/blog/2016/02/react-testing-tutorial.html
// react 包含css文件时，处理方法
// https://stackoverflow.com/questions/32683440/handle-webpack-css-imports-when-testing-with-mocha
// function noop() {
//   return null;
// }

// require.extensions['.styl'] = noop;
// // you can add whatever you wanna handle
// require.extensions['.scss'] = noop;
// require.extensions['.png'] = noop;
// mocha /your/test.spec.js --compilers css:css-null-compiler.js
// 或者：mocha --require ignore-styles



// karma
/**
 * shallow方法就是官方的shallow rendering的封装。
 * render方法将React组件渲染成静态的HTML字符串，然后分析这段HTML代码的结构，返回一个对象。
 * 它跟shallow方法非常像，主要的不同是采用了第三方HTML解析库Cheerio，它返回的是一个Cheerio实例对象。
 * mount方法用于将React组件加载为真实DOM节点。
 *  API:
 *  .get(index)：返回指定位置的子组件的DOM节点
    .at(index)：返回指定位置的子组件
    .first()：返回第一个子组件
    .last()：返回最后一个子组件
    .type()：返回当前组件的类型
    .text()：返回当前组件的文本内容
    .html()：返回当前组件的HTML代码形式
    .props()：返回根组件的所有属性
    .prop(key)：返回根组件的指定属性
    .state([key])：返回根组件的状态
    .setState(nextState)：设置根组件的状态
    .setProps(nextProps)：设置根组件的属性
 */

import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import HelloWord from '../src/helloword';

Enzyme.configure({ adapter: new Adapter() });


describe('<HelloWord />', () => {

  it('text 默认属性', () => {
    const wrapper = shallow(<HelloWord />);
    // 默认 mocha 好像是4秒超时，如果在规定时间内返回则报错，可以使用 done 结束
    expect(wrapper.html()).to.be.equal('<div>哈喽</div>');
  });

  it('text 空默认属性', () => {
    const wrapper = shallow(<HelloWord text='' />);
    // 默认 mocha 好像是4秒超时，如果在规定时间内返回则报错，可以使用 done 结束
    expect(wrapper.html()).to.be.equal('<div></div>');
  });

  it('text 设置属性', () => {
    const wrapper = shallow(<HelloWord  text='hi' />);
    // 默认 mocha 好像是4秒超时，如果在规定时间内返回则报错，可以使用 done 结束
    expect(wrapper.html()).to.be.equal('<div>hi</div>');
  });

});
