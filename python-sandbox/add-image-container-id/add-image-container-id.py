import json
import os

for json_file in os.listdir('./data'):
    json_path = os.path.join('./data/', json_file)
    with open(json_path) as f:
        data = json.load(f)

    data['imageContainerId'] = ""

    order_of_keys = [
        "piraId",
        "name",
        "category",
        "subcategory",
        "topic",
        "imagePaths",
        "imageContainerId",
        "conceptDiagramPath",
        "conceptDiagramText",
        "conceptLoneText",
        "equipment",
        "procedure",
    ]

    data = {key: data[key] for key in order_of_keys}

    with open(json_path, 'w') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)