import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { VscMarkdown, VscTerminalPowershell } from "react-icons/vsc";
import { FaJava, FaPython, FaDatabase, FaDocker } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

interface Page {
  index: number;
  name: string;
  route: string;
  type: string;
}

interface Props {
  pages: {
    index: number;
    name: string;
    route: string;
    type: string;
  }[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  currentComponent: string;
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
  visiblePageIndexs: number[];
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function AppTree({
  pages,
  selectedIndex,
  setSelectedIndex,
  currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
}: Props) {
  const navigate = useNavigate();
  const theme = useTheme();
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  let { pathname } = useLocation();

  const page: Page = pages.find((x) => x.route === pathname)!;

  useEffect(() => {
    if (page) {
      setSelectedIndex(page.index);
    }
  }, [page, setSelectedIndex]);

  function renderTreeItemBgColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index ? "rgba(144,202,249,0.16)" : "#252527";
    } else {
      return selectedIndex === index ? "#295fbf" : "#f3f3f3";
    }
  }

  function renderTreeItemColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index && currentComponent === "tree"
        ? "white"
        : "#bdc3cf";
    } else {
      return selectedIndex === index ? "#e2ffff" : "#69665f";
    }
  }

  function renderIcon(type: string) {
    switch (type) {
      case 'md': return <VscMarkdown color="#6997d5"/>;
      case 'java': return <FaJava color="#c93543"/>;
      case 'js': return <SiJavascript color="#F0DB4F"/>;
      case 'sql': return <FaDatabase color="#c93543"/>;
      case 'docker': return <FaDocker color="#0db7ed"/>;
      case 'py': return <FaPython color= "#4B8BBE"/>;
      case 'sh': return <VscTerminalPowershell color= "#6997d5"/>;
      default: return <VscMarkdown color="#6997d5"/>;
    }
  }

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ minWidth: 220 }}
      defaultExpanded={["-1"]}

      // sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem
        nodeId="-1"
        label="Home"
        color="#bdc3cf"
        onClick={() => {
          navigate("/");
          setSelectedIndex(-1);
        }}
      >
        {pages.map(({ index, name, route, type }) => (
          <TreeItem
            key={index}
            nodeId={index.toString()}
            label={name}
            sx={{
              color: renderTreeItemColor(index),
              backgroundColor: renderTreeItemBgColor(index),
              "&& .Mui-selected": {
                backgroundColor: renderTreeItemBgColor(index),
              },
            }}
            icon={renderIcon(type)}
            onClick={() => {
              if (!visiblePageIndexs.includes(index)) {
                const newIndexs = [...visiblePageIndexs, index];
                setVisiblePageIndexs(newIndexs);
              }
              navigate(route);
              setSelectedIndex(index);
              setCurrentComponent("tree");
            }}
          />
        ))}
      </TreeItem>
    </TreeView>
  );
}
