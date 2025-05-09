import { Switch } from '@/components/Switch';
import { useSettingsStore } from '@/store/useSettingsStore';
import { Link } from 'react-router';

const Settings = () => {
    const {
        showPartylistPhoto,
        setShowPartylistPhoto,
        showSenatorPhoto,
        setShowSenatorPhoto,
        showGovernorPhoto,
        setShowGovernorPhoto,
        showViceGovernorPhoto,
        setShowViceGovernorPhoto,
        showHouseOfRepresentativeMemberPhoto,
        setShowHouseOfRepresentativeMemberPhoto,
        showSangguaniangPanlalawiganPhoto,
        setShowSangguaniangPanlalawiganPhoto,
        toggleAllPhotos,
    } = useSettingsStore((state) => state);

    const allOn =
        showPartylistPhoto &&
        showSenatorPhoto &&
        showGovernorPhoto &&
        showViceGovernorPhoto &&
        showHouseOfRepresentativeMemberPhoto &&
        showSangguaniangPanlalawiganPhoto;

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center space-y-6">
            <div className="bg-gray-400 p-5 rounded-md space-y-4">
                {/* Toggle All */}
                <div className="flex items-center justify-between gap-10">
                    <span className="text-white font-semibold">Show All Photos</span>
                    <Switch
                        checked={allOn}
                        onChange={(value) => toggleAllPhotos(value)}
                    />
                </div>

                {/* Individual Toggles */}
                <div className="flex items-center justify-between gap-10">
                    <span className="text-white font-semibold">Show Partylist Photo</span>
                    <Switch checked={showPartylistPhoto} onChange={setShowPartylistPhoto} />
                </div>

                <div className="flex items-center justify-between gap-10">
                    <span className="text-white font-semibold">Show Senator Photo</span>
                    <Switch checked={showSenatorPhoto} onChange={setShowSenatorPhoto} />
                </div>

                <div className="flex items-center justify-between gap-10">
                    <span className="text-white font-semibold">Show Governor Photo</span>
                    <Switch checked={showGovernorPhoto} onChange={setShowGovernorPhoto} />
                </div>

                <div className="flex items-center justify-between gap-10">
                    <span className="text-white font-semibold">Show Vice Governor Photo</span>
                    <Switch checked={showViceGovernorPhoto} onChange={setShowViceGovernorPhoto} />
                </div>

                <div className="flex items-center justify-between gap-10">
                    <span className="text-white font-semibold">Show House of Rep Member Photo</span>
                    <Switch
                        checked={showHouseOfRepresentativeMemberPhoto}
                        onChange={setShowHouseOfRepresentativeMemberPhoto}
                    />
                </div>

                <div className="flex items-center justify-between gap-10">
                    <span className="text-white font-semibold">Show Sangguniang Panlalawigan Photo</span>
                    <Switch
                        checked={showSangguaniangPanlalawiganPhoto}
                        onChange={setShowSangguaniangPanlalawiganPhoto}
                    />
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
