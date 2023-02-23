import React from 'react';
import Radio from '../radio';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import { useTranslate } from '../utils';

interface T {
  '74fc5d8a': string;
  bb7486f4: string;
  c1bae1ec: string;
  '8a2e2847': string;
  '70ffa5d8': string;
  '0f261484': string;
  '6b1f669d': string;
}
const RadioDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '74fc5d8a': '基本用法',
      bb7486f4: '选项',
      c1bae1ec: '水平使用',
      '8a2e2847': '自定义尺寸',
      '70ffa5d8': '自定义图标',
      '0f261484': '触发事件',
      '6b1f669d': '当前选中值'
    },
    'zh-TW': {
      '74fc5d8a': '基本用法',
      bb7486f4: '選項',
      c1bae1ec: '水準使用',
      '8a2e2847': '自定義尺寸',
      '70ffa5d8': '自定義圖示',
      '0f261484': '觸發事件',
      '6b1f669d': '當前選中值'
    },
    'en-US': {
      '74fc5d8a': 'Basic Usage',
      bb7486f4: 'Options',
      c1bae1ec: 'Horizontal use',
      '8a2e2847': 'Custom size',
      '70ffa5d8': 'Custom Icon',
      '0f261484': 'Trigger Event',
      '6b1f669d': 'Currently selected'
    }
  });

  return (
    <DemoPage>
      <DemoCard
        // title='基本用法'
        title={translated['74fc5d8a']}
        style={{
          marginBottom: 0
        }}
      >
        <Radio.RadioGroup
          value='1'
        >
          <Radio value='1'>{`${translated.bb7486f4}1`}</Radio>
          <Radio disabled value='2'>{`${translated.bb7486f4}2`}</Radio>
          <Radio value='3'>{`${translated.bb7486f4}3`}</Radio>
        </Radio.RadioGroup>

      </DemoCard>
      <DemoCard>
        <Radio.RadioGroup
            value='1'
            textPosition='left'
          >
          <Radio value='1'>{`${translated.bb7486f4}1`}</Radio>
          <Radio disabled value='2'>{`${translated.bb7486f4}2`}</Radio>
          <Radio value='3'>{`${translated.bb7486f4}3`}</Radio>
        </Radio.RadioGroup>
      </DemoCard>

      <DemoCard>
        <Radio.RadioGroup
            value='1'
          >
          <Radio shape='button' value='1'>{`${translated.bb7486f4}1`}</Radio>
          <Radio disabled shape='button' value='2'>{`${translated.bb7486f4}2`}</Radio>
          <Radio shape='button' value='3'>{`${translated.bb7486f4}3`}</Radio>
        </Radio.RadioGroup>
      </DemoCard>

      <DemoCard
        // title='水平使用'
        title={translated.c1bae1ec}
      >
        <Radio.RadioGroup value='1' direction='horizontal'>
          <Radio value='1'>{`${translated.bb7486f4}1`}</Radio>
          <Radio disabled value='2'>{`${translated.bb7486f4}2`}</Radio>
          <Radio value='3'>{`${translated.bb7486f4}3`}</Radio>
        </Radio.RadioGroup>

        <Radio.RadioGroup value='1' textPosition='left' direction='horizontal'>
          <Radio value='1'>{`${translated.bb7486f4}1`}</Radio>
          <Radio disabled value='2'>{`${translated.bb7486f4}2`}</Radio>
          <Radio value='3'>{`${translated.bb7486f4}3`}</Radio>
        </Radio.RadioGroup>

        <Radio.RadioGroup value='1' direction='horizontal'>
          <Radio shape='button' value='1'>{`${translated.bb7486f4}1`}</Radio>
          <Radio disabled shape='button' value='2'>{`${translated.bb7486f4}2`}</Radio>
          <Radio shape='button' value='3'>{`${translated.bb7486f4}3`}</Radio>
        </Radio.RadioGroup>
      </DemoCard>

      <DemoCard
        // title='自定义尺寸'
        title={translated['8a2e2847']}
      >
        <Radio.RadioGroup value='1'>
          <Radio value='1' iconSize='12'>{`${translated['8a2e2847']}12`}</Radio>
          <Radio value='2' iconSize='12'>{`${translated['8a2e2847']}12`}</Radio>
        </Radio.RadioGroup>
      </DemoCard>

      <DemoCard
        // title='自定义图标'
        title={translated['70ffa5d8']}
      >
        <Radio.RadioGroup value='1'>
          <Radio value='1' iconName='checklist'
            iconActiveName='checklist'
          >{translated['70ffa5d8']}</Radio>
          <Radio value='2' iconName='checklist'
            iconActiveName='checklist'
          >{translated['70ffa5d8']}</Radio>
        </Radio.RadioGroup>
      </DemoCard>

      <DemoCard
        // title='触发 change 事件'
        title={translated['0f261484']}
      >
        <Radio.RadioGroup
          value='1'
          onChange={(v) => {
            alert(v);
          }}
        >
          <Radio value='1'>{translated['0f261484']}</Radio>
          <Radio value='2'>{translated['0f261484']}</Radio>
        </Radio.RadioGroup>
      </DemoCard>

    </DemoPage>
  );
};

export default RadioDemo;
