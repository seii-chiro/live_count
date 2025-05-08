import { Switch } from '@/components/Switch';
import { useSettingsStore } from '@/store/useSettingsStore';
import { Link } from 'react-router';

const Settings = () => {
    const showPartylistPhoto = useSettingsStore((state) => state.showPartylistPhoto);
    const setShowPartylistPhoto = useSettingsStore((state) => state.setShowPartylistPhoto);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center space-y-6">
            <div className="bg-gray-400 p-5 rounded-md space-y-4">
                <div className="flex items-center justify-between gap-10">
                    <span className="text-white font-semibold">Show Partylist Photo</span>
                    <Switch checked={showPartylistPhoto} onChange={setShowPartylistPhoto} />
                </div>
            </div>

            <Link
                to="/"
                className="text-white bg-black px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
            >
                Home
            </Link>
        </div>
    );
};

export default Settings;
