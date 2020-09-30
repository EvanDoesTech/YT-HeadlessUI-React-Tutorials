import Container from "components/Container";
import { Menu } from "@headlessui/react";

export default function index() {
  return (
    <Container>
      <Menu>
        <Menu.Button className="py-2 px-4 text-gray-600 font-medium bg-gray-100 border-2 border-gray-400 rounded focus:border-gray-500 focus:outline-none">
          Menu
        </Menu.Button>
        <Menu.Items className="mt-1 text-gray-600 bg-gray-100 border-2 border-gray-400 rounded">
          <div className="flex flex-col text-gray-600 text-sm p-4 border-b border-gray-400">
            <p>Signed in as</p> <p className="font-medium">Evan</p>
          </div>
          <Menu.Item
            as="div"
            className="flex py-2 px-4 hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              alert("Showing Alert");
            }}
          >
            Show alert
          </Menu.Item>
          <Menu.Item
            disabled
            as="div"
            className="flex py-2 px-4 text-gray-500 cursor-not-allowed"
          >
            This item is disabled.
          </Menu.Item>
          <Menu.Item
            as="a"
            href="/settings"
            className="flex py-2 px-4 hover:bg-gray-200"
          >
            View settings
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </Container>
  );
}
