import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { writeAsync: mintAll } = useScaffoldContractWrite({
    contractName: "SourceMinter",
    functionName: "mintAll",
    args: [["Sepolia", "Polygon"], "0"],
  });

  const { writeAsync: transferAll } = useScaffoldContractWrite({
    contractName: "SourceMinter",
    functionName: "transferAll",
    args: [["Sepolia", "Polygon"], "0x3D96c2a50242dD1c3D1eDAaE2a4d27F762F194dC", BigInt(1)],
  });

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <button
          className="btn btn-primary"
          onClick={() => {
            mintAll();
          }}
        >
          mint CCNFT
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            transferAll();
          }}
        >
          transfer CCNFT
        </button>
      </div>
    </>
  );
};

export default Home;
