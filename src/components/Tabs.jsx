"use client";
import { TABS_DATA_LIST } from "@/utils/helper";
import { useRouter, useSearchParams } from "next/navigation";

export default function Tabs() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get("tab") || TABS_DATA_LIST[0].title;
    const handleTabChange = (tab) => {
        router.push(`?tab=${tab}`);
    };
    return (
        <div className="p-4">
            <div className="flex space-x-4 border-b  overflow-x-scroll">
                {TABS_DATA_LIST.map((tab, i) => (
                    <button
                        key={i}
                        className={`py-2 px-4 text-nowrap ${activeTab === tab.title
                                ? "border-b-2 border-blue-500 font-bold"
                                : "text-gray-500"
                            }`}
                        onClick={() => handleTabChange(tab.title)}
                    >
                        {tab.title.toUpperCase()}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {TABS_DATA_LIST.map(
                    (tab) =>
                        activeTab === tab.title && <p key={tab.title}>{tab.description}</p>
                )}
            </div>
        </div>
    );
}