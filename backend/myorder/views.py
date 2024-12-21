from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Order

class FakeOrder(APIView):
    def post(self, request):
        # Simulate receiving an order
        data = request.data
        print(data)
        try:
            customer_id = data.get('customer_id')
            order_details = data.get('order_details')
            
            # Store the fake order in the database
            order = Order.objects.create(customer_id=customer_id, order_details=order_details)
            return Response({"message": "Order created successfully!", "order_id": order.id}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
