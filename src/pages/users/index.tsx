import {
  Breadcrumb,
  Flex,
  Form,
  Pagination,
  PaginationProps,
  Space,
  Table,
  TableProps,
  Tag,
  Typography,
} from "antd";
import Button from "../../components/ui/Button";
import { FaEdit, FaPlus, FaTimes } from "react-icons/fa";
import Input from "../../components/ui/input";
import Select from "../../components/ui/select";

interface DataType {
  key: string;
  nickName: string;
  name: string;
  lastName: string;
  idNumber: string;
  roles: string;
  branch: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "მომხმარებლის სახელი",
    dataIndex: "nickName",
    key: "nickName",
  },
  {
    title: "სახელი",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "გვარი",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "პირადობის N",
    key: "idNumber",
    dataIndex: "idNumber",
  },
  {
    title: "როლი",
    key: "roles",
    dataIndex: "roles",
  },
  {
    title: "ფილიალი",
    key: "branch",
    dataIndex: "branch",
  },
  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Flex gap={4}>
        <div className="grid place-content-center border border-solid cursor-pointer hover:border-primary border-[#dfe1e3] w-[27px] h-[27px] text-[#616365] hover:text-white hover:bg-primary">
          <FaEdit />
        </div>
        <div className="grid place-content-center border border-solid cursor-pointer hover:border-primary border-[#dfe1e3] w-[27px] h-[27px] text-[#616365] hover:text-white hover:bg-primary">
          <FaTimes />
        </div>
      </Flex>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    nickName: "John Brown",
    name: "სახელი",
    lastName: "New York No. 1 Lake Park",
    idNumber: "01010203040",
    roles: "",
    branch: "",
  },
  {
    key: "2",
    nickName: "Jim Green",
    name: "სახელი",
    lastName: "London No. 1 Lake Park",
    idNumber: "01010203040",
    roles: "",
    branch: "",
  },
  {
    key: "3",
    nickName: "Joe Black",
    name: "სახელი",
    lastName: "Sydney No. 1 Lake Park",
    idNumber: "01010203040",
    roles: "მომხმარებელი",
    branch: "თბილისი",
  },
];

const itemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return <div>წინა</div>;
  }
  if (type === "next") {
    return <div>შემდეგი</div>;
  }

  // if (type === "page") {
  //   return <div className="h-full bg-primary">{_}</div>;
  // }
  return originalElement;
};

const UsersPage = () => {
  return (
    <div>
      <div className="px-5">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "მთავარი",
            },
            {
              title: "ანგარიშები",
              href: "",
            },
          ]}
        />

        <Button
          type="primary"
          className="flex items-center gap-2 px-[30px] py-2 text-sm h-auto mb-[13px]"
        >
          <FaPlus />
          მომხმარებლის დამატება
        </Button>

        <Form layout="vertical">
          <Flex gap="small" align="end" wrap="wrap">
            <Form.Item className="text-[#616365] mb-0" label="მომხმარებელი">
              <Input />
            </Form.Item>
            <Form.Item
              className="text-[#616365] mb-0 w-[180px]"
              label="მომხმარებელი"
            >
              <Select className="" />
            </Form.Item>
            <Form.Item
              className="text-[#616365] mb-0 w-[180px]"
              label="მომხმარებელი"
            >
              <Select />
            </Form.Item>

            <Flex className="gap-1">
              <Button type="primary">ძებნა</Button>
              <Button
                type="default"
                className="grid place-content-center bg-[#999] clear-btn"
              >
                <FaTimes color="white" />
              </Button>
            </Flex>
          </Flex>
        </Form>

        <div className="text-sm my-7 text-[#616365]">შულ 320 მომხმარებელი</div>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="mb-5 "
      />
      <div className="text-center py-5">
        <Pagination
          total={500}
          itemRender={itemRender}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default UsersPage;
