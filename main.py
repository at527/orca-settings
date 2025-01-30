import json


def json_to_dict(file):
    with open(file) as f:
        data = json.load(f)
    return data


def main():
    printers = {
        "neptune3pro": [
            "neptune3pro/fdm_process_common-elegoo.json",
            "neptune3pro/fdm_process_elegoo_common.json",
            "neptune3pro/0.20mm Standard @Elegoo Neptune3.json",
        ],
        "neptune4": [
            "neptune4/fdm_process_common-elegoo.json",
            "neptune4/fdm_process_elegoo_common.json",
            "neptune4/fdm_process_neptune4_common.json",
            "neptune4/0.20mm Standard @Elegoo Neptune4 (0.4 nozzle).json",
        ],
        "marlin": [
            "marlin/fdm_process_common-marlin.json",
            "marlin/fdm_process_marlin_common.json",
            "marlin/0.20mm Standard @MyMarlin.json",
        ],
    }

    for printer, files in printers.items():
        printer_settings = {}
        for file in files:
            printer_settings.update(json_to_dict(file))
        printer_settings = {k: printer_settings[k] for k in sorted(printer_settings)}
        with open(f"{printer}_profile_merged.json", "w") as f:
            json.dump(printer_settings, f, indent=4)


if __name__ == "__main__":
    main()
