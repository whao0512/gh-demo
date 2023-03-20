// import React from "react";
// import { Form, Input, InputNumber, Select } from "antd";

// interface propTypes {
//   formItems: [];
// }

// const MyForm: React.FC = (props: propTypes) => {
//   const [form] = Form.useForm();
//   const { formItems } = props;
//   const initialValues = {};
//   return (
//     <Form
//       preserve={false}
//       labelCol={{ span: 4 }}
//       wrapperCol={{ span: 14 }}
//       layout="horizontal"
//       style={{ maxWidth: 600 }}
//       initialValues={initialValues}
//     >
//       {formItems.map((item: any) => {
//         return (
//           <Form.Item key={item.key} label={item.label} name={item.name}>
//             {item.type === "input" && <Input />}
//             {item.type === "input" && <Input.TextArea />}
//             {item.type === "input" && <Input />}
//             {item.type === "number" && <InputNumber />}
//             {item.type === "select" && <Select {...item.selectOption} />}
//           </Form.Item>
//         );
//       })}
//     </Form>
//   );
// };
// export default MyForm;
export {};
