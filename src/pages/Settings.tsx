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

    // Create a safe toggle function that handles the possible undefined case
    const handleToggleAll = (value: boolean) => {
        if (toggleAllPhotos) {
            toggleAllPhotos(value);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
            <div className="bg-gray-400 p-3 sm:p-5 rounded-md space-y-3 sm:space-y-4 w-full max-w-md">
                {/* Toggle All */}
                <div className="flex items-center justify-between">
                    <span className="text-white text-sm sm:text-base font-semibold pr-4 flex-1">Show All Photos</span>
                    <div className="flex-shrink-0">
                        <Switch
                            checked={allOn}
                            onChange={handleToggleAll}
                        />
                    </div>
                </div>

                {/* Individual Toggles */}
                <div className="flex items-center justify-between">
                    <span className="text-white text-sm sm:text-base font-semibold pr-4 flex-1">Show Partylist Photo</span>
                    <div className="flex-shrink-0">
                        <Switch checked={showPartylistPhoto} onChange={setShowPartylistPhoto} />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-white text-sm sm:text-base font-semibold pr-4 flex-1">Show Senator Photo</span>
                    <div className="flex-shrink-0">
                        <Switch checked={showSenatorPhoto} onChange={setShowSenatorPhoto} />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-white text-sm sm:text-base font-semibold pr-4 flex-1">Show Governor Photo</span>
                    <div className="flex-shrink-0">
                        <Switch checked={showGovernorPhoto} onChange={setShowGovernorPhoto} />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-white text-sm sm:text-base font-semibold pr-4 flex-1">Show Vice Governor Photo</span>
                    <div className="flex-shrink-0">
                        <Switch checked={showViceGovernorPhoto} onChange={setShowViceGovernorPhoto} />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-white text-sm sm:text-base font-semibold pr-4 flex-1">
                        Show House of Rep Member Photo
                    </span>
                    <div className="flex-shrink-0">
                        <Switch
                            checked={showHouseOfRepresentativeMemberPhoto}
                            onChange={setShowHouseOfRepresentativeMemberPhoto}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-white text-sm sm:text-base font-semibold pr-4 flex-1">
                        Show Sangguniang Panlalawigan Photo
                    </span>
                    <div className="flex-shrink-0">
                        <Switch
                            checked={showSangguaniangPanlalawiganPhoto}
                            onChange={setShowSangguaniangPanlalawiganPhoto}
                        />
                    </div>
                </div>
            </div>

            <Link
                to="/"
                className="text-white bg-black px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition mt-6"
            >
                Home
            </Link>
        </div>
    );
};

export default Settings;