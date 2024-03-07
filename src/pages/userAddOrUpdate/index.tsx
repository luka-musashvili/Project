import { Flex, Form } from "antd";
import Input from "../../components/ui/input";
import Button from "../../components/ui/Button";

type FieldType = {
  userName?: string;
  password?: string;
  repeatPassword?: string;
  firstName: string;
  lastName: string;
  idNumber: string;
  role: string;
  branch: string;
};

const UserAddOrUpdatePage = () => {
  return (
    <Flex gap={20}>
      <div className="w-[350px]">menu</div>
      <div className="w-full mr-5">
        <div className="bg-[#616365] text-white text-center py-[10px]">
          მომხმარებლის დამატება
        </div>
        <div className="border-1 border-[#dfe1e3] border-solid border-t-0 px-[23px] py-[25px]">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="მომხმარებლის სახელი"
              name="userName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="პაროლი"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              label="გაიმეორე პაროლი"
              name="repeatPassword"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password className="shadow-inner" />
            </Form.Item>

            <Form.Item<FieldType>
              label="სახელი"
              name="firstName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="გვარი"
              name="lastName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType> label="პირადობის ნომერი" name="idNumber">
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="როლი"
              name="role"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="ფილიალი"
              name="branch"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Flex>
  );
};

export default UserAddOrUpdatePage;
